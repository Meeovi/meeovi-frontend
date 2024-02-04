import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_translationUpdateManyMutationInput } from "../../../inputs/Product_cross_selling_translationUpdateManyMutationInput";
import { Product_cross_selling_translationWhereInput } from "../../../inputs/Product_cross_selling_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_cross_selling_translationArgs {
  @TypeGraphQL.Field(_type => Product_cross_selling_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_cross_selling_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationWhereInput, {
    nullable: true
  })
  where?: Product_cross_selling_translationWhereInput | undefined;
}
