import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_pageWhereUniqueInput } from "../../../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLanding_pageOrThrowArgs {
  @TypeGraphQL.Field(_type => Landing_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_pageWhereUniqueInput;
}
