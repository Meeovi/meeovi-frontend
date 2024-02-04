import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_reviewInput } from "../inputs/ProductCreateWithoutProduct_reviewInput";
import { ProductUpdateWithoutProduct_reviewInput } from "../inputs/ProductUpdateWithoutProduct_reviewInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_reviewInput", {})
export class ProductUpsertWithoutProduct_reviewInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_reviewInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_reviewInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_reviewInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_reviewInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
