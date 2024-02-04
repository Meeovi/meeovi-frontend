import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_downloadInput } from "../inputs/ProductCreateWithoutProduct_downloadInput";
import { ProductUpdateWithoutProduct_downloadInput } from "../inputs/ProductUpdateWithoutProduct_downloadInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_downloadInput", {})
export class ProductUpsertWithoutProduct_downloadInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_downloadInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_downloadInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_downloadInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_downloadInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
