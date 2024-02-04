import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_blockUpdateManyMutationInput } from "../../../inputs/App_cms_blockUpdateManyMutationInput";
import { App_cms_blockWhereInput } from "../../../inputs/App_cms_blockWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_cms_blockArgs {
  @TypeGraphQL.Field(_type => App_cms_blockUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_cms_blockUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_cms_blockWhereInput, {
    nullable: true
  })
  where?: App_cms_blockWhereInput | undefined;
}
