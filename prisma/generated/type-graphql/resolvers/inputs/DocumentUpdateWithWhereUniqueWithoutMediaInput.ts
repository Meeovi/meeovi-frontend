import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentUpdateWithoutMediaInput } from "../inputs/DocumentUpdateWithoutMediaInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpdateWithWhereUniqueWithoutMediaInput", {})
export class DocumentUpdateWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: DocumentUpdateWithoutMediaInput;
}
