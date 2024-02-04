import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_configUpdateManyMutationInput } from "../../../inputs/Product_search_configUpdateManyMutationInput";
import { Product_search_configWhereInput } from "../../../inputs/Product_search_configWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_search_configArgs {
  @TypeGraphQL.Field(_type => Product_search_configUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_search_configUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_search_configWhereInput, {
    nullable: true
  })
  where?: Product_search_configWhereInput | undefined;
}
