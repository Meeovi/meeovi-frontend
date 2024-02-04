import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionUpdateInput } from "../../../inputs/VersionUpdateInput";
import { VersionWhereUniqueInput } from "../../../inputs/VersionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVersionArgs {
  @TypeGraphQL.Field(_type => VersionUpdateInput, {
    nullable: false
  })
  data!: VersionUpdateInput;

  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionWhereUniqueInput;
}
