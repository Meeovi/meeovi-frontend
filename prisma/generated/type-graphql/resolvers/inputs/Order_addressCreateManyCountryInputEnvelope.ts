import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateManyCountryInput } from "../inputs/Order_addressCreateManyCountryInput";

@TypeGraphQL.InputType("Order_addressCreateManyCountryInputEnvelope", {})
export class Order_addressCreateManyCountryInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_addressCreateManyCountryInput], {
    nullable: false
  })
  data!: Order_addressCreateManyCountryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
