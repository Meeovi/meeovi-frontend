import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentUpdateWithoutOrderInput } from "../inputs/DocumentUpdateWithoutOrderInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpdateWithWhereUniqueWithoutOrderInput", {})
export class DocumentUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: DocumentUpdateWithoutOrderInput;
}
