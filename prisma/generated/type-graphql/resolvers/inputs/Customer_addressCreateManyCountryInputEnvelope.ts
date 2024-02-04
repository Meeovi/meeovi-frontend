import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateManyCountryInput } from "../inputs/Customer_addressCreateManyCountryInput";

@TypeGraphQL.InputType("Customer_addressCreateManyCountryInputEnvelope", {})
export class Customer_addressCreateManyCountryInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_addressCreateManyCountryInput], {
    nullable: false
  })
  data!: Customer_addressCreateManyCountryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
