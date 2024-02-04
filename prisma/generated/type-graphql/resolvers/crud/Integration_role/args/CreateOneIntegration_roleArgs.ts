import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Integration_roleCreateInput } from "../../../inputs/Integration_roleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIntegration_roleArgs {
  @TypeGraphQL.Field(_type => Integration_roleCreateInput, {
    nullable: false
  })
  data!: Integration_roleCreateInput;
}
