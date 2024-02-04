import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_mediaInput } from "../inputs/ProductUpdateWithoutProduct_mediaInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_mediaInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_mediaInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_mediaInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_mediaInput;
}
