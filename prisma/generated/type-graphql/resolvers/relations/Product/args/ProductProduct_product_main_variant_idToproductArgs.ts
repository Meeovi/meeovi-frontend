import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";

@TypeGraphQL.ArgsType()
export class ProductProduct_product_main_variant_idToproductArgs {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
