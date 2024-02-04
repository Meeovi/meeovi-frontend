import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_priceWhereInput } from "../../../inputs/Product_priceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_priceArgs {
  @TypeGraphQL.Field(_type => Product_priceWhereInput, {
    nullable: true
  })
  where?: Product_priceWhereInput | undefined;
}
