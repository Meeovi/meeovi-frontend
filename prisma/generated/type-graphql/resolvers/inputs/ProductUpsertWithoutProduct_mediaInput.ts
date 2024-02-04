import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_mediaInput } from "../inputs/ProductCreateWithoutProduct_mediaInput";
import { ProductUpdateWithoutProduct_mediaInput } from "../inputs/ProductUpdateWithoutProduct_mediaInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_mediaInput", {})
export class ProductUpsertWithoutProduct_mediaInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_mediaInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_mediaInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_mediaInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_mediaInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
