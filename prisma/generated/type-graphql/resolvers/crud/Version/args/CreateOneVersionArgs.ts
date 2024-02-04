import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionCreateInput } from "../../../inputs/VersionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVersionArgs {
  @TypeGraphQL.Field(_type => VersionCreateInput, {
    nullable: false
  })
  data!: VersionCreateInput;
}
