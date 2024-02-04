import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Product_categoryScalarWhereInput", {})
export class Product_categoryScalarWhereInput {
  @TypeGraphQL.Field(_type => [Product_categoryScalarWhereInput], {
    nullable: true
  })
  AND?: Product_categoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryScalarWhereInput], {
    nullable: true
  })
  OR?: Product_categoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryScalarWhereInput], {
    nullable: true
  })
  NOT?: Product_categoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  category_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  category_version_id?: BytesFilter | undefined;
}
