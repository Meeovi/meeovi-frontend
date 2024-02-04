import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagCreateManyTagInputEnvelope } from "../inputs/Media_tagCreateManyTagInputEnvelope";
import { Media_tagCreateOrConnectWithoutTagInput } from "../inputs/Media_tagCreateOrConnectWithoutTagInput";
import { Media_tagCreateWithoutTagInput } from "../inputs/Media_tagCreateWithoutTagInput";
import { Media_tagWhereUniqueInput } from "../inputs/Media_tagWhereUniqueInput";

@TypeGraphQL.InputType("Media_tagCreateNestedManyWithoutTagInput", {})
export class Media_tagCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [Media_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Media_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Media_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Media_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_tagWhereUniqueInput[] | undefined;
}
