import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_translationUpdateManyMutationInput } from "../../../inputs/App_translationUpdateManyMutationInput";
import { App_translationWhereInput } from "../../../inputs/App_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_translationArgs {
  @TypeGraphQL.Field(_type => App_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_translationWhereInput, {
    nullable: true
  })
  where?: App_translationWhereInput | undefined;
}
