import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_translationWhereInput } from "../inputs/Customer_group_translationWhereInput";

@TypeGraphQL.InputType("Customer_group_translationListRelationFilter", {})
export class Customer_group_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Customer_group_translationWhereInput, {
    nullable: true
  })
  every?: Customer_group_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationWhereInput, {
    nullable: true
  })
  some?: Customer_group_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationWhereInput, {
    nullable: true
  })
  none?: Customer_group_translationWhereInput | undefined;
}
