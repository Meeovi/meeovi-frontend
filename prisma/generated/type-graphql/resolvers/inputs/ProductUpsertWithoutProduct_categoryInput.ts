import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_categoryInput } from "../inputs/ProductCreateWithoutProduct_categoryInput";
import { ProductUpdateWithoutProduct_categoryInput } from "../inputs/ProductUpdateWithoutProduct_categoryInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_categoryInput", {})
export class ProductUpsertWithoutProduct_categoryInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_categoryInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_categoryInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_categoryInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_categoryInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
