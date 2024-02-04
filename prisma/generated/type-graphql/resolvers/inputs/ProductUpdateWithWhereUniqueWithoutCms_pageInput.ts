import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutCms_pageInput } from "../inputs/ProductUpdateWithoutCms_pageInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutCms_pageInput", {})
export class ProductUpdateWithWhereUniqueWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCms_pageInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutCms_pageInput;
}
