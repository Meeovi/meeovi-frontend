import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagWhereInput } from "../inputs/Customer_tagWhereInput";

@TypeGraphQL.InputType("Customer_tagListRelationFilter", {})
export class Customer_tagListRelationFilter {
  @TypeGraphQL.Field(_type => Customer_tagWhereInput, {
    nullable: true
  })
  every?: Customer_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_tagWhereInput, {
    nullable: true
  })
  some?: Customer_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_tagWhereInput, {
    nullable: true
  })
  none?: Customer_tagWhereInput | undefined;
}
