import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_typeUpdateInput } from "../../../inputs/Document_typeUpdateInput";
import { Document_typeWhereUniqueInput } from "../../../inputs/Document_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDocument_typeArgs {
  @TypeGraphQL.Field(_type => Document_typeUpdateInput, {
    nullable: false
  })
  data!: Document_typeUpdateInput;

  @TypeGraphQL.Field(_type => Document_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Document_typeWhereUniqueInput;
}
