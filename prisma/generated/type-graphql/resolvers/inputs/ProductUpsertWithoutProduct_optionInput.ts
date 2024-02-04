import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_optionInput } from "../inputs/ProductCreateWithoutProduct_optionInput";
import { ProductUpdateWithoutProduct_optionInput } from "../inputs/ProductUpdateWithoutProduct_optionInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_optionInput", {})
export class ProductUpsertWithoutProduct_optionInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_optionInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_optionInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_optionInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_optionInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
