import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppUpdateInput } from "../../../inputs/AppUpdateInput";
import { AppWhereUniqueInput } from "../../../inputs/AppWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAppArgs {
  @TypeGraphQL.Field(_type => AppUpdateInput, {
    nullable: false
  })
  data!: AppUpdateInput;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;
}
