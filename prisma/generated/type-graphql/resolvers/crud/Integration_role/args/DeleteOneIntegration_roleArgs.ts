import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Integration_roleWhereUniqueInput } from "../../../inputs/Integration_roleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneIntegration_roleArgs {
  @TypeGraphQL.Field(_type => Integration_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Integration_roleWhereUniqueInput;
}
