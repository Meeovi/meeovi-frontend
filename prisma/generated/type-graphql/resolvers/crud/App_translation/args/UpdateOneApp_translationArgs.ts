import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_translationUpdateInput } from "../../../inputs/App_translationUpdateInput";
import { App_translationWhereUniqueInput } from "../../../inputs/App_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneApp_translationArgs {
  @TypeGraphQL.Field(_type => App_translationUpdateInput, {
    nullable: false
  })
  data!: App_translationUpdateInput;

  @TypeGraphQL.Field(_type => App_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_translationWhereUniqueInput;
}
