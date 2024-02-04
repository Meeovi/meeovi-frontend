import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sorting_translationWhereInput } from "../../../inputs/Product_sorting_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_sorting_translationArgs {
  @TypeGraphQL.Field(_type => Product_sorting_translationWhereInput, {
    nullable: true
  })
  where?: Product_sorting_translationWhereInput | undefined;
}
