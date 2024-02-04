import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionUpdateManyMutationInput } from "../../../inputs/VersionUpdateManyMutationInput";
import { VersionWhereInput } from "../../../inputs/VersionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVersionArgs {
  @TypeGraphQL.Field(_type => VersionUpdateManyMutationInput, {
    nullable: false
  })
  data!: VersionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  where?: VersionWhereInput | undefined;
}
