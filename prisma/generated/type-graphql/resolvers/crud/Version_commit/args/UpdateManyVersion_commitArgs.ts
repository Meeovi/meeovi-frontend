import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commitUpdateManyMutationInput } from "../../../inputs/Version_commitUpdateManyMutationInput";
import { Version_commitWhereInput } from "../../../inputs/Version_commitWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVersion_commitArgs {
  @TypeGraphQL.Field(_type => Version_commitUpdateManyMutationInput, {
    nullable: false
  })
  data!: Version_commitUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Version_commitWhereInput, {
    nullable: true
  })
  where?: Version_commitWhereInput | undefined;
}
