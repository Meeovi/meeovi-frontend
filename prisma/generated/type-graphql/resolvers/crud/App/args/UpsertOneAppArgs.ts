import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppCreateInput } from "../../../inputs/AppCreateInput";
import { AppUpdateInput } from "../../../inputs/AppUpdateInput";
import { AppWhereUniqueInput } from "../../../inputs/AppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAppArgs {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateInput, {
    nullable: false
  })
  create!: AppCreateInput;

  @TypeGraphQL.Field(_type => AppUpdateInput, {
    nullable: false
  })
  update!: AppUpdateInput;
}
