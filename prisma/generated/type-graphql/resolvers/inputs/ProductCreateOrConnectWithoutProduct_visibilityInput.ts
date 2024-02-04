import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_visibilityInput } from "../inputs/ProductCreateWithoutProduct_visibilityInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateOrConnectWithoutProduct_visibilityInput", {})
export class ProductCreateOrConnectWithoutProduct_visibilityInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_visibilityInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_visibilityInput;
}
