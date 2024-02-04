import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_entityWhereUniqueInput } from "../../../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustom_entityOrThrowArgs {
  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_entityWhereUniqueInput;
}
