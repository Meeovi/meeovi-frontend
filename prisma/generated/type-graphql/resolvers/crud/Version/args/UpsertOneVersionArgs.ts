import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionCreateInput } from "../../../inputs/VersionCreateInput";
import { VersionUpdateInput } from "../../../inputs/VersionUpdateInput";
import { VersionWhereUniqueInput } from "../../../inputs/VersionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVersionArgs {
  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionCreateInput, {
    nullable: false
  })
  create!: VersionCreateInput;

  @TypeGraphQL.Field(_type => VersionUpdateInput, {
    nullable: false
  })
  update!: VersionUpdateInput;
}
