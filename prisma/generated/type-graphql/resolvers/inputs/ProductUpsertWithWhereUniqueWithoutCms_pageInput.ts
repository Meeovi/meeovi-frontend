import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutCms_pageInput } from "../inputs/ProductCreateWithoutCms_pageInput";
import { ProductUpdateWithoutCms_pageInput } from "../inputs/ProductUpdateWithoutCms_pageInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutCms_pageInput", {})
export class ProductUpsertWithWhereUniqueWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCms_pageInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutCms_pageInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutCms_pageInput, {
    nullable: false
  })
  create!: ProductCreateWithoutCms_pageInput;
}
