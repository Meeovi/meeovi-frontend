import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionsUpdateInput } from "../../../inputs/VersionsUpdateInput";
import { VersionsWhereUniqueInput } from "../../../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVersionsArgs {
  @TypeGraphQL.Field(_type => VersionsUpdateInput, {
    nullable: false
  })
  data!: VersionsUpdateInput;

  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionsWhereUniqueInput;
}
