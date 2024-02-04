import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagCreateManyTagInput } from "../inputs/Customer_tagCreateManyTagInput";

@TypeGraphQL.InputType("Customer_tagCreateManyTagInputEnvelope", {})
export class Customer_tagCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_tagCreateManyTagInput], {
    nullable: false
  })
  data!: Customer_tagCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
