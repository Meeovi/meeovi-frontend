import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_administration_snippetUpdateManyMutationInput } from "../../../inputs/App_administration_snippetUpdateManyMutationInput";
import { App_administration_snippetWhereInput } from "../../../inputs/App_administration_snippetWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_administration_snippetArgs {
  @TypeGraphQL.Field(_type => App_administration_snippetUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_administration_snippetUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_administration_snippetWhereInput, {
    nullable: true
  })
  where?: App_administration_snippetWhereInput | undefined;
}
