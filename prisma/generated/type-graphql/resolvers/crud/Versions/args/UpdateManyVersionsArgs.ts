import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionsUpdateManyMutationInput } from "../../../inputs/VersionsUpdateManyMutationInput";
import { VersionsWhereInput } from "../../../inputs/VersionsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVersionsArgs {
  @TypeGraphQL.Field(_type => VersionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;
}
