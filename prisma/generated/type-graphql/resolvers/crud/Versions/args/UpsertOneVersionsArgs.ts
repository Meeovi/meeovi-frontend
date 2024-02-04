import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionsCreateInput } from "../../../inputs/VersionsCreateInput";
import { VersionsUpdateInput } from "../../../inputs/VersionsUpdateInput";
import { VersionsWhereUniqueInput } from "../../../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVersionsArgs {
  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionsCreateInput, {
    nullable: false
  })
  create!: VersionsCreateInput;

  @TypeGraphQL.Field(_type => VersionsUpdateInput, {
    nullable: false
  })
  update!: VersionsUpdateInput;
}
