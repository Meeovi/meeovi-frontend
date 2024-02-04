import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_tagInput } from "../inputs/ProductCreateWithoutProduct_tagInput";
import { ProductUpdateWithoutProduct_tagInput } from "../inputs/ProductUpdateWithoutProduct_tagInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_tagInput", {})
export class ProductUpsertWithoutProduct_tagInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_tagInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_tagInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_tagInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_tagInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
