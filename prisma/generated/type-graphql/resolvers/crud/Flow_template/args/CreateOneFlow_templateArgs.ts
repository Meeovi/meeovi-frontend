import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_templateCreateInput } from "../../../inputs/Flow_templateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFlow_templateArgs {
  @TypeGraphQL.Field(_type => Flow_templateCreateInput, {
    nullable: false
  })
  data!: Flow_templateCreateInput;
}
