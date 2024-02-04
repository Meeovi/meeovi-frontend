import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionsCreateInput } from "../../../inputs/VersionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVersionsArgs {
  @TypeGraphQL.Field(_type => VersionsCreateInput, {
    nullable: false
  })
  data!: VersionsCreateInput;
}
