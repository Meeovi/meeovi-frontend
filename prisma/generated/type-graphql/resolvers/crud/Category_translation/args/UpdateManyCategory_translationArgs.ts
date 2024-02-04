import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_translationUpdateManyMutationInput } from "../../../inputs/Category_translationUpdateManyMutationInput";
import { Category_translationWhereInput } from "../../../inputs/Category_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategory_translationArgs {
  @TypeGraphQL.Field(_type => Category_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Category_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Category_translationWhereInput, {
    nullable: true
  })
  where?: Category_translationWhereInput | undefined;
}
