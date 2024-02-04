import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagScalarWhereInput } from "../inputs/Media_tagScalarWhereInput";
import { Media_tagUpdateManyMutationInput } from "../inputs/Media_tagUpdateManyMutationInput";

@TypeGraphQL.InputType("Media_tagUpdateManyWithWhereWithoutMediaInput", {})
export class Media_tagUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => Media_tagScalarWhereInput, {
    nullable: false
  })
  where!: Media_tagScalarWhereInput;

  @TypeGraphQL.Field(_type => Media_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Media_tagUpdateManyMutationInput;
}
