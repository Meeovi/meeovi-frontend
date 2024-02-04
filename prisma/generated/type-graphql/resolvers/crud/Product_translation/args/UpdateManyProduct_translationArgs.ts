import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_translationUpdateManyMutationInput } from "../../../inputs/Product_translationUpdateManyMutationInput";
import { Product_translationWhereInput } from "../../../inputs/Product_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_translationArgs {
  @TypeGraphQL.Field(_type => Product_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_translationWhereInput, {
    nullable: true
  })
  where?: Product_translationWhereInput | undefined;
}
