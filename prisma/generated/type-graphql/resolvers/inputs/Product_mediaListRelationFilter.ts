import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaWhereInput } from "../inputs/Product_mediaWhereInput";

@TypeGraphQL.InputType("Product_mediaListRelationFilter", {})
export class Product_mediaListRelationFilter {
  @TypeGraphQL.Field(_type => Product_mediaWhereInput, {
    nullable: true
  })
  every?: Product_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaWhereInput, {
    nullable: true
  })
  some?: Product_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaWhereInput, {
    nullable: true
  })
  none?: Product_mediaWhereInput | undefined;
}
