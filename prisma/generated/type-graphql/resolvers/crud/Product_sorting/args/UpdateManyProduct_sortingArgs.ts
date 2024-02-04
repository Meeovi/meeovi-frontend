import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sortingUpdateManyMutationInput } from "../../../inputs/Product_sortingUpdateManyMutationInput";
import { Product_sortingWhereInput } from "../../../inputs/Product_sortingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_sortingArgs {
  @TypeGraphQL.Field(_type => Product_sortingUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_sortingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_sortingWhereInput, {
    nullable: true
  })
  where?: Product_sortingWhereInput | undefined;
}
