import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadWhereInput } from "../inputs/Product_downloadWhereInput";

@TypeGraphQL.InputType("Product_downloadListRelationFilter", {})
export class Product_downloadListRelationFilter {
  @TypeGraphQL.Field(_type => Product_downloadWhereInput, {
    nullable: true
  })
  every?: Product_downloadWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadWhereInput, {
    nullable: true
  })
  some?: Product_downloadWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadWhereInput, {
    nullable: true
  })
  none?: Product_downloadWhereInput | undefined;
}
