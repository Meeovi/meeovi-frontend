import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commitCreateInput } from "../../../inputs/Version_commitCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVersion_commitArgs {
  @TypeGraphQL.Field(_type => Version_commitCreateInput, {
    nullable: false
  })
  data!: Version_commitCreateInput;
}
