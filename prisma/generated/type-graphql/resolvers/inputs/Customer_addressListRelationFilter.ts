import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressWhereInput } from "../inputs/Customer_addressWhereInput";

@TypeGraphQL.InputType("Customer_addressListRelationFilter", {})
export class Customer_addressListRelationFilter {
  @TypeGraphQL.Field(_type => Customer_addressWhereInput, {
    nullable: true
  })
  every?: Customer_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_addressWhereInput, {
    nullable: true
  })
  some?: Customer_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_addressWhereInput, {
    nullable: true
  })
  none?: Customer_addressWhereInput | undefined;
}
