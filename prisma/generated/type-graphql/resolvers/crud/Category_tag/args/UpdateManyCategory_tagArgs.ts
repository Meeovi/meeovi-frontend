import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_tagUpdateManyMutationInput } from "../../../inputs/Category_tagUpdateManyMutationInput";
import { Category_tagWhereInput } from "../../../inputs/Category_tagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategory_tagArgs {
  @TypeGraphQL.Field(_type => Category_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Category_tagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Category_tagWhereInput, {
    nullable: true
  })
  where?: Category_tagWhereInput | undefined;
}
